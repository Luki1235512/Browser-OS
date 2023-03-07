import HelloWorld from 'components/apps/HelloWorld';
import processDirectory from 'utils/processDirectory';

export default function Home(): ReactElement {
  return <processDirectory.HelloWorld.Component />;
}
