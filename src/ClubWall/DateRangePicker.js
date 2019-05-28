import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { SmallPrimaryButton, T12 } from '../Generics/Styles';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const InfoText = styled.div`
    margin: 5px 0;
    font-size: 12px;
    text-transform: uppercase;
    color: gray;
    padding: 5px 0px;
    letter-spacing: 1px;
    font-weight: bold;
`

const ResetButton = styled(SmallPrimaryButton)`
    padding: 5px;   
    font-size:10px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

export default class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: null,
            to: null,
            enteredTo: null, // Keep track of the last day for mouseEnter.
        };
    }
    isSelectingFirstDay(from, to, day) {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }
    handleDayClick(day) {
        const { from, to } = this.state;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            this.props.getStartDate('POSTS FROM');
            this.props.getEndDate('POSTS TILL');
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null,
            });
            this.props.getStartDate(day.toLocaleDateString());
        } else {
            this.setState({
                to: day,
                enteredTo: day,
            });
            this.props.getEndDate(day.toLocaleDateString());
        }
    }
    handleDayMouseEnter(day) {
        const { from, to } = this.state;
        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }

    handleResetClick() {
        this.setState(this.getInitialState());
    }
    render() {
        const { from, to, enteredTo } = this.state;
        const modifiers = { start: from, end: enteredTo };
        const disabledDays = { before: this.state.from };
        const selectedDays = [from, { from, to: enteredTo }];
        return (
            <div>
                <DayPicker
                    className="Range"
                    numberOfMonths={2}
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}
                />
                <InfoText>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                        to &&
                        `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                        to && (
                            <ResetButton height={'max-width'} width={'max-width'} onClick={this.handleResetClick}>Reset</ResetButton>
                        )}
                </InfoText>
                <Helmet>
                    <style>
                        {`
                        .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                        }
                        .Range .DayPicker-Day {
                            border-radius: 0 !important;
                        }
                    `}
                    </style>
                </Helmet>
            </div>
        );
    }
}