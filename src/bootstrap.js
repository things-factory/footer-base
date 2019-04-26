import { store } from '@things-factory/shell'
import footer from './reducers/footer'

export default function bootstrap() {
  store.addReducers({
    footer
  })
}
