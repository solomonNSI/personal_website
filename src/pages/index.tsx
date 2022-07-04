import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="hack me solomon"
          description="Personal Website, too many links and some bio"
        />
      }
    ></Main>
  );
};

export default Index;
