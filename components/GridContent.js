import { Grid, GridItem } from '../components/ui/grid';
import { Text } from '../components/ui/text';

function GridContent() {
  return (
    <Grid
      className="gap-4]"
      _extra={{
        className: 'grid-cols-9 sm:grid-cols-9 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-9',
      }}
    >
      <GridItem
        className="bg-muted p-3 rounded-md text-center cardContentGrid"
        _extra={{
          className: 'col-span-3 ',
        }}
      >
        <Text className="text-muted-foreground">Jehovà te pido que me des mas autodominio la pròxima vez que venga la tentaciòn</Text>
      </GridItem>
      <GridItem
        className="bg-muted p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-3',
        }}
      >
        <Text className="text-muted-foreground">B</Text>
      </GridItem>
     
    </Grid>
  );
}

export default GridContent;