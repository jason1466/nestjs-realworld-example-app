import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ArticleModule } from "./article/article.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ProfileModule } from "./profile/profile.module";
import { TagModule } from "./tag/tag.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    MongooseModule.forRoot(
      "mongodb://teamwiz:IEht4GjHsalkD8ME52wdHBQHzpl9WiW2by5XqF3rc5eAEyXuN2CgPNEEc1eR80pErkhBvA9svK7hRcGybnzp9w==@teamwiz.documents.azure.com:10255/?ssl=true&replicaSet=globaldb",
      {
        dbName: "Test",
        useNewUrlParser: true
      }
    )
  ],
  controllers: [AppController],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
