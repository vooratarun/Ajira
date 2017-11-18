# Dynamic Forms
This project is to create Dynamic form
# Technologies used  :
Back-end : Node.js Express
Front-end : Angular Js 1
Database  : Elasticsearch db

# Work till now

Back-end  : 
Developed some API's that generate dynamic form
Stored the entered data in json format in elasticsearch db
Fetching forms from database and showing it to the user.

Front-end :
Developed three modules.
First module is to collecting form information and all fields and rules information and some dependencies and finally generate
a long JSON object which will be stored in database and render as form finally.
Second module is to show all forms which were inserted in DB.
Third module is render the JSON data and make original form based on inputs given.

# Need to develop :

For form creation data input, Every input is string (it will be modified)
Need to create dependencies 
Need to Render form perfectly
Support for new field and rule


MIT License

Copyright (c) 2017 Tarun Voora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
