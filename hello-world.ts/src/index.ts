import { Client } from "renderfarm";

async function main() {
    var apiKey = "75f5-4d53-b0f4";
    var workspace = "55a0bd33-9f15-4bc0-a482-17899eb67af3";
    var host = "mel.mbnsay.com";
    var port = 443;

    var client = new Client(apiKey, workspace);
    var workers = await client.GetWorkers(host, port);
    console.log("Running workers: ", workers);

    var session = await client.Connect(host, port);
    return session;
}

main()
.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.error(err);
});
