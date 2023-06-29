import { Grid, Container, Row, Col, Panel, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';
export default function Signin() {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('Signed In', 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive Chat Platform for neophyte</p>
              </div>
              <div className="mt-2">
                <Button onClick={onFacebookSignIn} block color="blue">
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>
              </div>
              <div className="mt-2">
                <Button onClick={onGoogleSignIn} block color="green">
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}
