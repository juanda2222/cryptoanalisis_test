

import { generator_load_post_data } from '../redux/sagas/post_api_saga'

const main = () => {
    
  const gen = generator_load_post_data()
  console.log(gen.next()) // => { done: boolean, value: any }
  console.log(gen.next()) // => { done: boolean, value: any }
}

  // execute only if is directly run by node
if (require.main === module) {
    main();
}

module.exports = main