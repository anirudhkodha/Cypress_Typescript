import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import { times } from 'lodash';
import { truncate } from "lodash";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import BRSVOL from "../pages/BRSVOLlocators";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";

