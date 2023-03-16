const fetch = require('node-fetch');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


module.exports = {
    readUserInput: async (req, res) => {
        try {
            readline.question(`Please enter javascript code to execute:`, async code => {
                const body = {code_to_process: code};
                const response = await fetch('http://localhost:3002/executecode', {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                });
                if(response.status===200){
                    res.status(200).json({message:"code successfully evaluated!"});
                }else{
                    res.status(500).json({message:"getting error while evaluating code!"});
                }
                readline.close();
            });
        } catch (err) {
            // console.log("error", err.message);
            res.status(500).json({ error: err.message });
        }

    }
}

