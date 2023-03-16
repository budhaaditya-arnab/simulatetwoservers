const vm = require('node:vm');

module.exports = {
    executeCode: async (req, res) => {
        try {
            console.log(req.body.code_to_process);
            if (req?.body?.code_to_process) {
                vm.runInNewContext(req.body.code_to_process);
                res.status(200).json({ message: "code evaluated successfully!" });
            }else{
                res.status(500).json({ message: "no code to process" });
            }

        } catch (err) {
            // console.log(err.message);
            res.status(500).json({ error: err.message });
        }

    }
}
