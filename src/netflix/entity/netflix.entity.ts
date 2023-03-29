import { MovieModule } from 'src/movies/movie.module';
import { UserEntity } from 'src/user/entities/user.entity';

export class Netflix {
  id?: string;
  userId?: UserEntity;
  movieId?: MovieModule;
}
