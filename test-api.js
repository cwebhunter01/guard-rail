// Simple test to see if we can talk to Claude

const fetch = require('node-fetch');

async function testClaudeAPI() {
  console.log('🤖 Testing Claude API...');
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'YOUR_API_KEY_HERE', // Replace this!
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 100,
      messages: [{
        role: 'user',
        content: 'Say hello in a fun way!'
      }]
    })
  });

  const data = await response.json();
  console.log('✅ Claude says:', data.content[0].text);
}

testClaudeAPI();