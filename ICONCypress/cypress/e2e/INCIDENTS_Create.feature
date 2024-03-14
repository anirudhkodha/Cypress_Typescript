
Feature: To test incident types
    ||As a staff member I want to record all types of incidents||


	@Regression @Teamcity @FullIncidentBushfiretype
	Scenario Outline: Create Full Incident[Bushfire type]

		||	# ICONSUP-T424 (1.0) BR-STRP-10 Full Incident SitRep/ICONSUP-T423 (1.0) BR-STRP-9 Automatically triggered SitRep
			# ICONSUP-T405 (1.0) BR-INC-14 [Add/Edit SitUp/SitRep] / No BRIGADE REPORTING TAB 
			# ICONSUP-T642 (1.0) Validate 'Fire(& other incidents/events)' validation messages are displayed correctly and tab is highlighted 
			# ICONSUP-T604 (1.0) Validate Successfully saved message is displayed when user save information on SitRep Fire (&other Incidents/events)
			# ICONSUP-T952 (1.0) verify Alert level new matrix and alert level list page/ BR-STRP0-3
			# ICONSUP-T424
			# ICONSUP-T1421 (1.0) ICONSUP-3677 : Default values of Sitrep created through "ICON"||

		Given I open ICON webpage
		And I can see dashboard
		And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Full Incident"
		And I can see the page header "Full Incident Details"
		And if I have the test data for "Full Incident"
		And I enter "<inc_name>" "<LGA>" "<incident_loc>" "<sensitive>" "<master>" "<RART>" "<Triple0_ref>" "<reason_noTriple0_ref>" "<local_inc_id>" "<triple0_RCVDCall>" "<Rfs_RCVDCall>"
		And I select the type "<inc_type>" and input the value "<type_value>"
		And I take a pic of the page "FULL INCIDENT CREATE"
		When I click "Save"
		Then I should find validate mssg "Info! No SitRep Authorised"
		Then I click "Incident Details"
		Then I should find "<results_label>" is populated

	Examples:
		|inc_name	|LGA	|incident_loc	|sensitive	|master	|RART	|Triple0_ref	|reason_noTriple0_ref	|inc_type	|type_value	|local_inc_id	|triple0_RCVDCall 	|Rfs_RCVDCall	|results_label|
		|			|		|				|			|		|		|				| 						|  			|			|				| 					|				|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|





	# @Regression @Teamcity @fullincidentOTHERdata
	# Scenario Outline: Create Full Incident[Other type]
	# 	Given I open ICON webpage
	# 	And I can see dashboard
	# 	And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Full Incident"
	# 	And I can see the page header "Full Incident Details"
	# 	And if I have the test data for "Full Incident"
	# 	And I enter "<inc_name>" "<LGA>" "<incident_loc>" "<sensitive>" "<master>" "<RART>" "<Triple0_ref>" "<reason_noTriple0_ref>" "<local_inc_id>" "<triple0_RCVDCall>" "<Rfs_RCVDCall>"
	# 	And I select the type "<inc_type>" and input the value "<type_value>"
	# 	And I take a pic of the page "FULL INCIDENT CREATE : OTHER TYPE"
	# 	When I click "Save"
	# 	Then I should find validate mssg "Info! No SitRep Authorised"
	# 	Then I click "Incident Details"
	# 	Then I should find "<results_label>" is populated

	# Examples:	 
	# 	|inc_name						|LGA		|incident_loc					|sensitive		|master	|RART	|Triple0_ref	|reason_noTriple0_ref		|local_inc_id	|triple0_RCVDCall	|Rfs_RCVDCall		|inc_type	|type_value	|results_label|
	# 	|								|			|								|YES			|NO		|YES	|				|							|				|					|					|Other		|Car fire	|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|




	# @Regression @Teamcity @fullincidentNonFireType
	# Scenario Outline: Create Full Incident[Non-fire type]
	# 	Given I open ICON webpage
	# 	And I can see dashboard
	# 	And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Full Incident"
	# 	And I can see the page header "Full Incident Details"
	# 	And if I have the test data for "Full Incident"
	# 	And I enter "<inc_name>" "<LGA>" "<incident_loc>" "<sensitive>" "<master>" "<RART>" "<Triple0_ref>" "<reason_noTriple0_ref>" "<local_inc_id>" "<triple0_RCVDCall>" "<Rfs_RCVDCall>"
	# 	And I select the type "<inc_type>" and input the value "<type_value>"
	# 	And I take a pic of the page "FULL INCIDENT CREATE : Non-Fire TYPE"
	# 	When I click "Save"
	# 	Then I should find validate mssg "Info! No SitRep Authorised"
	# 	Then I click "Incident Details"
	# 	Then I should find "<results_label>" is populated


	# Examples:
	# 	|inc_name					|LGA			|incident_loc								|sensitive	|master	|RART	|Triple0_ref	|reason_noTriple0_ref			|local_inc_id	|triple0_RCVDCall	|Rfs_RCVDCall		|inc_type	|type_value	|results_label|
	# 	|							|				|											|YES		|YES	|YES	|				|								|				|					|					|Non		|Explosion	|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|
		

	# @Regression @Teamcity @BushfireShelldata
	# Scenario Outline: Create Bushfire Shell Incident

	# 	||	Automated Trigger for FIU from Incident Suspected Cause and No delete
	# 		Selecting a non-master incient ||		
		
	# 	Given I open ICON webpage
	# 	And I can see dashboard
	# 	And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Bushfire Shell"
	# 	And I can see the page header "Bush, Scrub or Grass Fire Incident"
	# 	And if I have the test data for "Shell INCIDENT"
	# 	And I select the type "<inc_type>" and input the value "<type_value>"	
	# 	And I enter "<inc_name>""<LGA>""<start_time>""<class_fire>""<big>""<tenure_list>""<inc_status>""<agency>""<owner>""<cause>""<incident_loc>""<master>""<heading>""<potential_threat>"
	# 	And I select the "<alert_value>" from "alert_rating" and input the number "<alert_name>"
	# 	And I input the "value" for "<name>" on the section "Resources"
	# 	When I click "Save"
	# 	And I take a pic of the page "Shell Incident Create"
	# 	Then I should find validate mssg "This incident is under investigation by the FIU"
	# 	Then I click "Incident Details"
	# 	Then I should find "<results_label>" is populated

		
	# 	Examples:
	# 	|inc_name	|LGA	|start_time	|class_fire	|big	|tenure_list	|inc_status	|agency	|owner	|cause	|incident_loc	|master	|heading	|potential_threat	|inc_type	|type_value	|alert_value|alert_name	|name	|results_label|
	# 	|			|		|			|			|		|				|			|		|		|		|				|		|			|					|			|			|			|			|		|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|

			


	# @Regression @Teamcity @Other-NonShelldata
	# Scenario Outline: Create Other Shell Incident

	# 	||	Automated Trigger for FIU from Incident Suspected Cause and No delete
	# 		Selecting a non-master incient ||		
		
	# 	Given I open ICON webpage
	# 	And I can see dashboard
	# 	And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Other Shell"
	# 	And I can see the page header "Other Incident"
	# 	And if I have the test data for "Shell INCIDENT"
	# 	And I select the type "<inc_type>" and input the value "<type_value>"
	# 	And I enter "<inc_name>""<LGA>""<start_time>""<tenure_list>""<inc_status>""<agency>""<owner>""<cause>""<incident_loc>""<master>""<heading>""<potential_threat>"
	# 	And I input the "value" for "<name>" on the section "Resources"
	# 	When I click "Save"
	# 	And I take a pic of the page "Shell Incident Create"
	# 	Then I should find validate mssg "This incident is under investigation by the FIU"
	# 	Then I click "Incident Details"
	# 	Then I should find "<results_label>" is populated

	# Examples:
	# 	|inc_name 	|LGA 	|start_time |tenure_list |inc_status	|agency	|owner	|cause 	|incident_loc 	|master	|heading 	|potential_threat 	|inc_type 	|type_value	|name	|results_label|
	# 	| 			| 		| 			|			 | 				| 		| 		| 		| 				|NO 	|			|				 	|Other 		| 			| 		|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|
	# 	| 			| 		| 			|			 | 				| 		| 		| 		| 				|NO		|			|				 	|Non 		| 			| 		|Reference_No.,Status,Universal_Id,Type,Class,Name,Lead_Agency|
		
