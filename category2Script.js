// const axios = require('axios');
// const category = "Driver Team History";
// async function sendMessage(message) {
//   try {
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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', // Replace with your API key
//       },
//     });

//     // Process the response
//     const reply = response.data.choices[0].message.content;
//     console.log('ChatGPT:', reply);
//   } catch (error) {
//     console.error('Error:', error.response.data);
//   }
// }
// sendMessage("Create a 10 new Formula 1 questions about the drivers' team paths, give 4 possible options and give the correct answer:");

