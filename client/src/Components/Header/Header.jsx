import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
function Header({ type }) {
    const [openCalender, setOpenCalender] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handelOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="hederListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="hederListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="hederListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="hederListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="hederListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <React.Fragment>
                        <h1 className="headerTitle"> A Lifetime of discout ? It's Genius.</h1>
                        <p className="headerDescription">
                            Get Rewarded for your travel - unlock instant saving of 10% or more with
                            a free Booking.com account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder='your destination ?'
                                    className='headerSearchInput' />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenCalender(!openCalender)} className='headerSearchText'>
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openCalender &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOption(!openOption)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                {openOption &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button disabled={options.adult <= 1} className="optionCounterButton"
                                                    onClick={() => handelOption("adult", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button className="optionCounterButton" onClick={() => handelOption("adult", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handelOption("children", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button className="optionCounterButton" onClick={() => handelOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Rooms</span>
                                            <div className="optionCounter">
                                                <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handelOption("room", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button className="optionCounterButton" onClick={() => handelOption("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">
                                    Search
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div >
    )
}

export default Header