import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import UsersContext from '../../../contexts/users';
import User from "../../../contexts/users/user";

export default function Users(props) {
  const {createUser} = useContext(UsersContext);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [description, setDescription] = useState();
  const [active, setActive] = useState(true);

  const addUser = () => {
    createUser(new User({
      id,
      name,
      username,
      password,
      gender,
      role,
      avatarUrl,
      description,
      active
    }));
  };


  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="id"
            name="id"
            label="Identification"
            fullWidth
            autoComplete="identification"
            onChange={({target: {value} = {}}) => setId(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="name"
            onChange={({target: {value} = {}}) => setName(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="username"
            onChange={({target: {value} = {}}) => setUsername(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            onChange={({target: {value} = {}}) => setPassword(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="gender"
            onChange={({target: {value} = {}}) => setGender(value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="role"
            name="role"
            label="Role"
            fullWidth
            autoComplete="role"
            onChange={({target: {value} = {}}) => setRole(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="avatar-url"
            name="avatar-url"
            label="Avatar URL"
            fullWidth
            autoComplete="avatar-url"
            onChange={({target: {value} = {}}) => setAvatarUrl(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
            onChange={({target: {value} = {}}) => setDescription(value)}
          />
        </Grid>
        <Grid item xs={12} >
          <FormControlLabel
            control={
              <Switch
                checked={active}
                onChange={() => setActive(!active)}
                name="checkedB"
                color="primary"
              />
            } label='Active'/>
        </Grid>
      </Grid>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => addUser()}
        >
          Add user
        </Button>
      </div>
    </React.Fragment>
  );
}