import {Card, DatePicker, ChoiceList} from '@shopify/polaris';
import {useCallback, useState, useEffect}  from 'react';

function Choose(props){
  const [selected, setSelected] = useState(
    props.scheduleTime && props.scheduleTime.start?
      ['scheduled']
      :
      ['always']
    );

  const handleChange = useCallback((value) => {
    setSelected(value);
    if(value.includes('always')){
      props.handleTimeSetting({start:null,end:null})
    }
  }, [selected]);

  const renderDatePicker = useCallback(
    (isSelected) =>
      isSelected && (
        <Schedule 
          handleTimeSetting={props.handleTimeSetting}
          scheduleTime={props.scheduleTime}
        />
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
  useEffect(()=>{
    if(props.scheduleTime){
      let start_h = document.getElementById('start_hour'),
          start_m = document.getElementById('start_min'),
          end_h = document.getElementById('end_hour'),
          end_m = document.getElementById('end_min');
      start_h.value = props.scheduleTime.start.hour;
      start_m.value = props.scheduleTime.start.min;
      end_h.value = props.scheduleTime.end.hour;
      end_m.value = props.scheduleTime.end.min;
    }
  },[props.scheduleTime])

  return (
    <div style={{margin:'1em 0'}}>
      <div>Please enter the hour (from 0 to 23) and minute (from 0 to 59) that the display <strong>starts</strong>:</div>
      <div style={{marginTop:'.5em'}}>
        <span style={{marginRight:'.3em'}}>Hour:</span>
        <input 
          id="start_hour" 
          type='number' 
          min={0} 
          max={23}  
          style={{marginRight:'1em'}}
        />
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
  const timeStrToDateObj = (timeObj) =>{
    if(timeObj.start && timeObj.start.length > 0){
      let start = new Date(timeObj.start);
      let end = new Date(timeObj.end);
      return {
        start:{
          year: start.getFullYear(),
          month: start.getMonth(),
          date:start.getDate(),
          hour:start.getHours(),
          min:start.getMinutes()
        },
        end:{
          year: end.getFullYear(),
          month: end.getMonth(),
          date:end.getDate(),
          hour:end.getHours(),
          min:end.getMinutes()
        }
      }
    }
    return null;
  }

  const [{ month, year }, setDate] = useState(
    timeStrToDateObj(props.scheduleTime)?
      {
        month: timeStrToDateObj(props.scheduleTime).start.month,
        year:timeStrToDateObj(props.scheduleTime).start.year
      }
      :
      {
        month: (new Date()).getMonth(),
        year: (new Date()).getFullYear()
      }
  );
  const [selectedDates, setSelectedDates] = useState(
    props.scheduleTime && props.scheduleTime.start ?
      {
        start: new Date(props.scheduleTime.start),
        end: new Date(props.scheduleTime.end)
      }
      :
      {
      start: new Date(),
      end: new Date()
      }
  );
  const [{leftMon,rightMon},setMonth] = useState({
    leftMon:month+1,
    rightMon:month+2
  });


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

  const [{start_h,start_m},setStartTime] = useState(
    timeStrToDateObj(props.scheduleTime)?
      {
        start_h:timeStrToDateObj(props.scheduleTime).start.hour,
        start_m:timeStrToDateObj(props.scheduleTime).start.min
      }
      :
      {
        start_h:0,
        start_m:0
      }
  );
  const [{end_h,end_m},setEndTime] = useState(
    timeStrToDateObj(props.scheduleTime)?
      {
        end_h:timeStrToDateObj(props.scheduleTime).end.hour,
        end_m:timeStrToDateObj(props.scheduleTime).end.min
      }
      :
      {
        end_h:0,
        end_m:0
      }
  )

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
      <SelectTime 
        scheduleTime={timeStrToDateObj(props.scheduleTime)}
      />
      <div>Define the Start Time and End Time of the display period. Must select at least two days.</div>
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
        <Choose 
          handleTimeSetting={this.props.handleTimeSetting}
          scheduleTime={this.props.scheduleTime}
        />
      </Card.Section>
    )
  }
}

export default DisplaySchedule;