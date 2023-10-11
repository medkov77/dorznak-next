import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class FilesService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const filePath = path.resolve(__dirname, '..', 'static');
      const fileName = file.originalname;
      console.log(file);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      throw new HttpException(
        'Произошла шибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
