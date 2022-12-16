import Button from "./ui/button";
import EventSearchClasses from './events-search.module.css';
import { useRef } from "react";

const EventSearch = (props: any) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const submitForm = (event:any) =>{
        event.preventDefault();
        const selectedYear : any = yearInputRef.current;
        const selectedMonth : any = monthInputRef.current;
        props.onSearch(selectedYear.value,selectedMonth.value);
    }

    return (
       <form className={EventSearchClasses.form} onSubmit={submitForm}>
        <div className={EventSearchClasses.controls}>
            <div className={EventSearchClasses.control}>
                <label htmlFor='year'>Year</label>
                <select id='year' ref={yearInputRef}>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
            <div className={EventSearchClasses.control}>
                <label htmlFor="month">Month</label>
                <select id='month' ref={monthInputRef}>
                    <option value='1'>Jan</option>
                    <option value='2'>Feb</option>
                    <option value='3'>Mar</option>
                    <option value='4'>Apr</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>Aug</option>
                    <option value='9'>Sept</option>
                    <option value='10'>Oct</option>
                    <option value='11'>Nov</option>
                    <option value='12'>Dec</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
       </form>
    )
}

export default EventSearch;