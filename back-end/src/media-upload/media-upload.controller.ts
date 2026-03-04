import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { MediaUploadService } from "./media-upload.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("media-upload")
export class MediaUploadController {
  constructor(private readonly mediaService: MediaUploadService) {}

  @HttpCode(200)
  @Post("avatar")
  @Auth()
  @UseInterceptors(
    FileInterceptor("file", { limits: { fileSize: 5 * 1024 * 1024 } }), //5MB
  )
  async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    const uploaded = await this.mediaService.saveAvatar(file);
    return uploaded;
  }
}
