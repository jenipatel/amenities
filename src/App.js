import React from 'react';
import ActivitiesCheckboxes from './ActivitiesCheckboxes.js';
import FoodAndDrinkCheckboxes from './FoodAndDrinkCheckboxes.js';
import PoolAndSpaCheckboxes from './PoolAndSpaCheckboxes.js';
import Checkbox from './Checkbox.jsx';
import PropTypes from 'prop-types';

// Write this imports in php storm
// import ActivitiesComponent from '../components/ActivitiesComponent.jsx';
// import FoodAndDrinkComponent from '../components/FoodAndDrinkComponent.jsx';
// import PoolAndSpaComponent from '../components/PoolAndSpaComponent.jsx';
import './App.css';
// import axios from "axios"; //library for http request

// const Checkboxes = [ActivitiesCheckboxes, FoodAndDrinkCheckboxes, PoolAndSpaCheckboxes];
// const Checkboxes = ActivitiesCheckboxes;

const halfwayActivitiesCheckboxes = Math.ceil(ActivitiesCheckboxes.length/2);
const firstHalfActivitiesCheckboxes = ActivitiesCheckboxes.slice(0, halfwayActivitiesCheckboxes);
const secondHalfActivitiesCheckboxes = ActivitiesCheckboxes.slice(halfwayActivitiesCheckboxes);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    for (let i=0; i<ActivitiesCheckboxes.length; i++) {
      console.log(formSubmitEvent.target[i].name + " => " + formSubmitEvent.target[i].checked);
    }
  }

  handleFormReset(formResetEvent) {
      formResetEvent.preventDefault();
      this.setState({
        checkedItems: new Map(),
      });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="amenities-container">
            <span className="amenities-heading">Amenities</span>        
              <label className="activities-heading">Activities</label>
              <div className="popular-amenities-description">
                <div className="popular-amenity-star">
                  <i className="material-icons md-18 grade">grade</i>
                </div>
                <div className="description">
                  <span>Top amenities are the most popular among travelers.</span>
                </div>
              </div>
              <div className="checkboxes checkboxes-class">
                {
                  firstHalfActivitiesCheckboxes.map((item, i) => (
                    <label key={item.key}>
                      <div className="default-checkboxes">
                        <Checkbox
                          name={item.name}
                          defaultChecked={item.available}
                          checked={this.state.checkedItems.get(item.name)}
                          onChange={this.handleChange}
                        />
                      </div>
                      { this.state.checkedItems.get(item.name) === undefined && item.available === true ? 
                          <div>
                              <i className="material-icons checked">check_box</i>
                              <div className="checked-checkboxes-label">
                                    { item.label }
                                    { item.popular === 1 ? 
                                      <i className="material-icons md-18 grade">grade</i> : 
                                      null 
                                    }
                              </div>
                          </div> :
                          ( this.state.checkedItems.get(item.name) === true ? 
                                <div>
                                    <i className="material-icons checked">check_box</i>
                                    <div className="checked-checkboxes-label">
                                          { item.label }
                                          { item.popular === 1 ? 
                                            <i className="material-icons md-18 grade">grade</i> : 
                                            null 
                                          }
                                    </div>
                                </div> :
                                <div>
                                    <i className="material-icons unchecked"></i>
                                    <div className="unchecked-checkboxes-label">
                                          { item.label }
                                          { item.popular === 1 ? 
                                            <i className="material-icons md-18 grade">grade</i> : 
                                            null 
                                          }
                                    </div>
                                </div>
                          )
                      }
                    </label>
                  ))
                }
              </div>
              <div className=" checkboxes checkboxes-class-secondHalf">
                {
                  secondHalfActivitiesCheckboxes.map((item, i) => (
                    <label key={item.key}>
                      <div className="default-checkboxes">
                        <Checkbox
                          name={item.name}
                          defaultChecked={item.available}
                          checked={this.state.checkedItems.get(item.name)}
                          onChange={this.handleChange}
                        />
                      </div>
                      { this.state.checkedItems.get(item.name) === undefined && item.available === true ? 
                          <div>
                            <i className="material-icons checked secondHalf">check_box</i>
                            <div className="checked-checkboxes-label-secondHalf">
                                { item.label }
                                { item.popular === 1 ? 
                                  <i className="material-icons md-18 grade secondHalf">grade</i> : 
                                  null 
                                }
                            </div>
                          </div> :
                          ( this.state.checkedItems.get(item.name) === true ? 
                                <div>
                                  <i className="material-icons checked secondHalf">check_box</i>
                                  <div className="checked-checkboxes-label-secondHalf">
                                      { item.label }
                                      { item.popular === 1 ? 
                                        <i className="material-icons md-18 grade secondHalf">grade</i> : 
                                        null 
                                      }
                                  </div>
                                </div> :
                                <div>
                                  <i className="material-icons unchecked secondHalf"></i>
                                  <div className="unchecked-checkboxes-label-secondHalf">
                                      { item.label }
                                      { item.popular === 1 ? 
                                        <i className="material-icons md-18 grade secondHalf">grade</i> : 
                                        null 
                                      }
                                  </div>
                                </div>
                          )
                      }
                    </label>
                  ))
                }
              </div>
              <div className="collapse-show-less">
                <span>SHOW LESS</span>
              </div>
              <div className="horizontal-line"></div>
              <button onClick={this.handleFormReset} type="button" className="reset-button">Cancel</button>         
              <button type="submit" className="submit-button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
