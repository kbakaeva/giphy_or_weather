import React, { useState } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchWeather, fetchGiphy} from '../../actions'


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './main.css'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


function Form(props) {
    const classes = useStyles();
    const [choice, setChoice] = React.useState('');
    const [open, setOpen] = React.useState(false);
    
    const handleChange = (event) => {
      setChoice(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const [val, setVal] = useState()
    const search = (event) =>{
        event.preventDefault()
    if(choice==1){
        props.fetchWeather(val)
    }else{
        props.fetchGiphy(val)
        }
      
    }
    return (
        <div className='main'>
   <div>
   <h1 className='naming'>G/W</h1>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Choice</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={choice}
          onChange={handleChange}
        >
          <MenuItem value={1}>Weather</MenuItem>
          <MenuItem value={2}>Giphy</MenuItem>
        </Select>
      </FormControl>
    </div>
        <div>
            <form onSubmit={search}>
                <input
                className = 'search'
                value={val}
                onChange={(e)=>setVal(e.target.value)}
                 placeholder = ' Enter name'/>
                <button className='searchButton'>Search</button>
            </form>
        </div>

      
    </div>
    )
}
function mapDispatchToProps (dispatch){
    return bindActionCreators({fetchWeather, fetchGiphy}, dispatch)
}
export default  connect(null, mapDispatchToProps)(Form)