import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from '@/components/ui/avatar';

function AvatarUser() {
  return (
    <Avatar className='w-15 h-15'>
      <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        }}
      />
    </Avatar>
  );
}

export default AvatarUser;