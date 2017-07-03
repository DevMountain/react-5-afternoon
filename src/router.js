import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { Switch, Route } from 'react-router-dom';


export default function(loanType, propType, changeLoanType, changePropertyType, changePropertyToBeUsedOn, propToBeUsedOn, city, updateCity, foundFalse, foundTrue, found, realEstateAgentTrue, realEstateAgentFalse, realEstateAgent, updateDownPayment, downPayment, updateCost, cost, credit, updateCreditE,updateCreditG, updateCreditF,updateCreditP, history, updateHistory, addressOne, addressTwo, addressThree, updateAddLineOne, updateAddLineTwo, updateAddLineThree, updateFirst, updateLast, updateEmail, firstName, lastName, email){

        return (
            <Switch>
                <Route exact path= '/' render={()=> <NextBtn />} />

                <Route path='/wOne' render={()=> <WizardOne loanType={loanType} propType={propType} handleLoanType={changeLoanType} handlePropType={changePropertyType}/>} />
                
                <Route render={()=> <WizardTwo city={city} updateCity={updateCity}/>} path="/wTwo"/>
                <Route render={()=> <WizardThree loanType={loanType} propType={propType} propToBeUsedOn={changePropertyToBeUsedOn} propUsedOn={propToBeUsedOn}/> } path="/wThree"/>
                <Route render={()=> <WizardFour foundFalse={foundFalse} foundTrue={foundTrue} found={found}/>} path='/wFour' />
                <Route render={()=> <WizardFive realEstateAgentTrue={realEstateAgentTrue} realEstateAgentFalse={realEstateAgentFalse} realEstateAgent={realEstateAgent}/>} path="/wFive" />
                <Route render={()=> <WizardSix downPayment={downPayment} updateDownPayment={updateDownPayment} cost={cost} updateCost={updateCost}/>} path="/wSix"/>
                <Route render={()=> <WizardSeven credit={credit} updateCreditE={updateCreditE} updateCreditF={updateCreditF} updateCreditG={updateCreditG} updateCreditP={updateCreditP}/>} path="/wSeven"/>
                <Route render={()=> <WizardEight history={history} updateHistory ={updateHistory} />} path="/wEight"/>
                <Route render={()=> <WizardNine addressOne={addressOne} addressTwo={addressTwo} addressThree={addressThree} updateAddLineOne={updateAddLineOne} updateAddLineTwo={updateAddLineTwo} updateAddLineThree={updateAddLineThree} />} path="/wNine"/>
                <Route render={()=> <WizardTen firstName={firstName} lastName={lastName} email={email} updateFirst={updateFirst} updateLast={updateLast} updateEmail={updateEmail} />} path="/wTen"/>
                <Route render={()=> <WizardEleven firstName={firstName} lastName={lastName} email={email} loanType={loanType} propType={propType} propToBeUsedOn={propToBeUsedOn} city={city} found={found} realEstateAgent={realEstateAgent} downPayment={downPayment} cost={cost} credit={credit} history={history} addressOne={addressOne}addressTwo={addressTwo} addressThree={addressThree} />} path="/wEleven"/>
                <Route component={Finish} path='/finish'/>
            </Switch>
        )
}
 

 