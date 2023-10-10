import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const filePath = path.relative(__dirname, '../static');
      if (!fs.existsSync(filePath)) {
        fs.mkdir(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, 'img'), file.buffer);
      return 'img';
    } catch (error) {
      throw new HttpException(
        'Произошла шибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
