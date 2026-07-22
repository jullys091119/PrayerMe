import { Grid, GridItem } from '@/components/ui/grid';
import { Text } from '@/components/ui/text';

function GridModal() {
  return (
    <Grid
      className="gap-y-2 gap-x-4"
      _extra={{
        className: 'grid-cols-6',
      }}
    >
      <GridItem
        className="bg-muted p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm text-muted-foreground">01</Text>
      </GridItem>
    
    </Grid>
  );
}

export default GridModal