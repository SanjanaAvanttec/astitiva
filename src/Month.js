
// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Calendar from './COMPONENT/Calander';

import DatePicker from './COMPONENT/Datepicker';

// import DatePicker from "react-horizontal-datepicker";

function DateMonth (){

    const [selectedDate, setSelectedDate] = useState(null);

    // const styles = StyleSheet.create({
    //     container: {
    //       flex: 1,
    //       backgroundColor: '#fff',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     },
    //   });

      const selectedDay = (val) =>{
        console.log(val)
    };
    return(
        <>

              <div  style={{backgroundColor:"white"}} className='d-flex justify-content-center mt-5'>

                    <DatePicker getSelectedDay={selectedDay} 
                    // endDate={100}
                    selectDate={new Date()}
                    labelFormat={"MMMM  yyyy"}
                    color={"#374e8c"} 
                            
                    />


                    </div>

                    {/* <div style={{backgroundColor:"plum"}}>
                    <View style={styles.container}>
                    <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
                    <StatusBar style="auto" />
                    </View>

                    </div> */}
        </>
    )
}

export default DateMonth;