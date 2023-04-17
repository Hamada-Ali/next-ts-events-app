import React, { FormEvent, ReactElement, useRef } from "react";
import Button from "./ui/Button";
import classes from "./events-search.module.css";

interface propTypes {
    onSearch: (year: string, month: string) => void
}

const EventSearch = ({onSearch}: propTypes) => {

    const yearRef = useRef<HTMLSelectElement>() as React.MutableRefObject<HTMLSelectElement>
    const monthRef = useRef<HTMLSelectElement>() as React.MutableRefObject<HTMLSelectElement>
    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const selectedYear = yearRef.current.value;
        const selectedMonth = monthRef.current.value;

        onSearch(selectedYear, selectedMonth)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">year</label>
                    <select id="year" ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">month</label>
                    <select id="month" ref={monthRef}>
                        <option value="1">january</option>
                        <option value="2">february</option>
                        <option value="3">march</option>
                        <option value="4">april</option>
                        <option value="5">may</option>
                        <option value="6">june</option>
                        <option value="7">july</option>
                        <option value="8">august</option>
                        <option value="9">september</option>
                        <option value="10">october</option>
                        <option value="11">november</option>
                        <option value="12">december</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export default EventSearch;