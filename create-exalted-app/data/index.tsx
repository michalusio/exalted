import Exalted from 'exalted';

const App = () => {
  return <boxElement width={20} height={10} border={'line'} align={'center'} valign={'middle'}>Hello, ${projectName}!</boxElement>;
}

Exalted.Bootstrap(App);