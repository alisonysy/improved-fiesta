import {Card, DatePicker, ChoiceList} from '@shopify/polaris';
import {useCallback, useState, useEffect}  from 'react';

function Choose(props){
  const [selected, setSelected] = useState(['always']);

  const handleChange = useCallback((value) => setSelected(value), []);

  const renderDatePicker = useCallback(
    (isSelected) =>
      isSelected && (
        <Schedule handleTimeSetting={props.handleTimeSetting}/>
      )
  )

  return (
    <ChoiceList
      choices={[
        {label: 'Always display', value: 'always'},
        {label: 'Only display within the giving period of time', value: 'scheduled',renderChildren:renderDatePicker},
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
};

function SelectTime(props){
  
  return (
    <div style={{margin:'1em 0'}}>
      <div>Please enter the hour (from 0 to 23) and minute (from 0 to 59) that the display <strong>starts</strong>:</div>
      <div style={{marginTop:'.5em'}}>
        <span style={{marginRight:'.3em'}}>Hour:</span>
        <input id="start_hour" type='number' min={0} max={23}  style={{marginRight:'1em'}}/>
        <span style={{marginRight:'.3em'}}>Minute:</span>
        <input id="start_min" type='number' min={0} max={59}/>
      </div>
      <div style={{marginTop:'.5em'}}>Please enter the hour (from 0 to 23) and minute (from 0 to 59) that the display <strong>ends</strong>:</div>
      <div style={{marginTop:'.5em'}}>
        <span style={{marginRight:'.3em'}}>Hour:</span>
        <input id="end_hour" type='number' min={0} max={23}  style={{marginRight:'1em'}}/>
        <span  style={{marginRight:'.3em'}}>Minute:</span>
        <input id="end_min" type='number' min={0} max={59}/>
      </div>
    </div>
  )
}

function Schedule(props){
  const [{ month, year }, setDate] = useState({
    month: 9,
    year: 2019
  });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date()
  });
  const [{leftMon,rightMon},setMonth] = useState({
    leftMon:month+1,
    rightMon:month+2
  })

  const handleMonthChange = useCallback((month, year) => {
    setDate({ month, year });
    setMonth({leftMon:month+1,rightMon:month+2})
  }, []);

  const transpileMonth = (month) => {
    month = ''+month;
    switch(month){
      case '1':
        return 'January';
        break;
      case '2':
        return 'Feburary';
        break;
      case '3':
        return 'March';
        break;
      case '4':
        return 'April';
      case '5':
        return 'May';
      case '6':
        return 'June';
      case '7':
        return 'July';
      case '8':
        return 'August';
      case '9':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
      case '13':
        return 'January';
    }
  };

  const [{start_h,start_m},setStartTime] = useState({
    start_h:0,
    start_m:0
  });
  const [{end_h,end_m},setEndTime] = useState({
    end_h:0,
    end_m:0
  })

  const handleTimeSelection = () => {
    const startH = document.getElementById('start_hour'),
          startM = document.getElementById('start_min'),
          endH = document.getElementById('end_hour'),
          endM = document.getElementById('end_min');
    let startT={}, endT={};
    startH.addEventListener('change',function(e){
      let num = e.target.valueAsNumber;
      num > 23?
        startT.hour = 23
        :
        num < 0?
          startT.hour = 0
          :
          startT.hour = num;
      setStartTime({start_m,start_h:startT.hour});
    });
    startM.addEventListener('change',function(e){
      let num = e.target.valueAsNumber;
      num > 59?
        startT.min = 59
        :
        num < 0?
          startT.min = 0
          :
          startT.min = num;
      setStartTime({start_h,start_m:startT.min});
    });
    endH.addEventListener('change',function(e){
      let num = e.target.valueAsNumber;
      num > 23?
        endT.hour = 23
        :
        num < 0?
          endT.hour = 0
          :
          endT.hour = num;
      setEndTime({end_m,end_h:endT.hour});
    });
    endM.addEventListener('change',function(e){
      let num = e.target.valueAsNumber;
      num > 59?
        endT.min = 59
        :
        num < 0?
          endT.min = 0
          :
          endT.min = num;
      setEndTime({end_h,end_m:endT.min});
    });
  }

  useEffect(()=>{
    let startD = new Date(selectedDates.start);
    let endD = new Date(selectedDates.end);
    handleTimeSelection();
    startD = startD.getFullYear()+'/'+(startD.getMonth()+1)+'/'+startD.getDate()+' '+start_h+':'+start_m;
    endD = endD.getFullYear()+'/'+(endD.getMonth()+1)+'/'+endD.getDate()+' '+end_h+':'+end_m;
    props.handleTimeSetting({start:startD,end:endD});
  },[selectedDates,start_h,start_m,end_h,end_m]);


  return (
    <div>
      <div style={{display:'flex',flexFlow:'row nowrap',justifyContent:'stretch'}}>
        <div style={{width:'50%',textAlign:'center'}}>{transpileMonth(leftMon)}</div>
        <div style={{width:'50%',textAlign:'center'}}>{transpileMonth(rightMon)}</div>
      </div>
      <DatePicker 
      month={month} 
      year={year} 
      onChange={setSelectedDates} 
      onMonthChange={handleMonthChange} 
      selected={selectedDates} 
      multiMonth={true} 
      allowRange={true} 
      />
      <SelectTime />
    </div>
  );
}

class DisplaySchedule extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <Card.Section>
        <div style={{marginBottom:'1em',fontSize:'1.1em'}}>Display schedule:</div>
        <Choose handleTimeSetting={this.props.handleTimeSetting}/>
        <div>Define the Start Time and End Time of the display period. Must select at least two days.</div>
      </Card.Section>
    )
  }
}

export default DisplaySchedule;