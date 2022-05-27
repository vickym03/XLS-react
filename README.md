To run client
Open DataMang_Client folder
In CMD  enter "npm i or npm install"  
After installing node modules  npm start

To run server
Open DataMang_Server folder
In  ConnectDb.js connnect your database 
open CMD  and enter "npm start"  



Data Management
There is a need for an application for management of data into database. The user has a
.xlxs file format which contains data of class students .

Features
● Upload a xls file in input box
➢ Check for correct file format if error in format reject

● Validation of uploaded data
➢ Check for error in file data
➔ Null error
➔ Undefined
➔ White space
➢ Check for miss-match data in file data
➢ Add list the number of errors and also list the number of correct data in a report above in
table format

● Map the valid data
➢ Map the valid data and upload into MongoDB
➢ Map the errors in to report above

● On next upload
➢ On next upload of file check for duplicate value in database and upload file
➢ Map the duplicate values and errors on report on data
➢ Map the valid data into table


