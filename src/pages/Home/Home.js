import phone from 'assets/train-track-g3d85a0b90_1280.jpg';
import { StyledLink, Images, StyledRight, MainTitle } from './Home.styled';
import Box from 'components/PhoneBook/Box';
import Title from 'components/PhoneBook/Title';
export default function Home() {
  return (
    <>
      <Box height="100%">
        <Box display="flex" height="98vh">
          <Box width="70%">
            <Images src={phone} alt="phone" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="30%"
            as="nav"
            alignItems="center"
          >
            <MainTitle>Happening now</MainTitle>
            <Title>Join PhoneBook today.</Title>

            <StyledLink to="login">Sign in</StyledLink>
            <StyledLink to="register">Sign up</StyledLink>
          </Box>
        </Box>
        <Box textAlign="center" height="2vh">
          <StyledRight>
            &copy; 2022 - PhoneBook. All Rights Reserved.
          </StyledRight>
        </Box>
      </Box>
    </>
  );
}
