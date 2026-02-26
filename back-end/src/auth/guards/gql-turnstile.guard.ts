import {
  BadRequestException,
  Inject,
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { TurnstileService } from "nest-cloudflare-turnstile/dist/services/turnstile.service";
import { IGqlContext } from "src/app.interface";

interface ITurnstileResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  errorCodes?: string[];
  cdata?: string;
}

@Injectable()
export class GqlTurnstileGuard implements CanActivate {
  constructor(
    private readonly turnstileService: TurnstileService,
    @Inject("TurnstileServiceOptions")
    private readonly options: { secretKey: string },
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext<IGqlContext>().req;

    const token = request.headers["cf-turnstile-token"];
    if (!token) {
      throw new BadRequestException("Captcha token is required");
      return false;
    }

    const { success } = (await this.turnstileService.validateToken(
      token as string,
    )) as ITurnstileResponse;
    if (!success) {
      throw new BadRequestException("Invalid captcha token");
    }
    return true;
  }
}
