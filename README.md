#How to deploy a nodejs Server:
    **Creating a server in node.js**
        *First we will include express library in our js file
        *Then the we give a port number where our server will be run
        *We will call listen function at the particular port
    **Deploy a server**
        *Create account on heroku
        *Run command on the localServer
        *Upload on the heroku account
        * Get the URL from heroku
        *Paste the URL for API 

#How to use the created api's:
    ##Two API's have been created 
         **Top-10-Vaccinated Districts**
            *First the Router is created
            *Then a post request is created using the following router
            *Under the post request we have the following logic
                -First the state is received from the client-side 
                -Then we will look for vaccinated and district_name for that particular state  in the JSON file
                - We will fetch the values and store it two different arrays
                -We will sort these two arrays
            *We will return the sorted arrays in an object as response using the api to the client-side
            *Client-Side JS will receive the response and output it on the HTML page

        **Monthly Infection and Recovery**
            *First the Router is created
            *Then a post request is created using the following router
            *Under the post request we have the following logic
                -Receive the state from the client-side using the api
                -Declare a variable sum=0,sum1=0
                -Calculate total monthly infections and recoveries for each day for each district
            *We will return both the sums in an object as response using the api to the client-side
            *Client-Side JS will receive the response and output it on the HTML page
            