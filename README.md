  # Dify Assistant Evaluation with PromptFoo 🚀

This project allows you to evaluate and test Dify assistants using PromptFoo, ensuring their responses meet desired criteria and are as expected.

## Getting Started 🏁

1. **Set up Dify assistants** with their respective API URLs and keys.
2. **Create a `.env` file** with your OpenAI API key: `OPENAI_API_KEY=<your_openai_api_key>`.
3. **Install project dependencies** by running `npm install`.
4. **Modify the PromptFoo configuration file** (`promptfooconfig.yaml`) with prompts and scenarios. Replace the example Dify provider configuration with the details of your Dify assistants, including the API URL and API key.
5. **Start a local proxy** for testing with Dify using `npm run start`.
6. **Run tests** with `npm run test`.
7. **Generate a report** with `npm run report` to view the results in your browser.


## PromptFoo Configuration 📝

The PromptFoo configuration file (`promptfooconfig.yaml`) contains the following sections:

- **Prompts**: Questions or statements to be evaluated by the Dify assistants.
- **Providers**: Configuration for Dify assistants, including API URL, API key, and inputs.
- **Scenarios**: Test scenarios with defined expectations and assertions.

For more information on PromptFoo configuration, visit: [PromptFoo Configuration Guide](https://promptfoo.dev/docs/configuration/guide)

### How to Define Dify API URL and API Key 🔗

In the PromptFoo configuration file (`promptfooconfig.yaml`), you can define the Dify assistant's API URL and API key as follows:

1. Locate the `providers` section in the configuration file.
2. Replace the existing `webhook` configuration with your Dify assistant's information.

Here's an example of how to define a Dify assistant with its API URL and API key:

```yaml
providers:
  - id: webhook:http://localhost:3000/
    config:
      apiKey: YOUR_DIFY_API_KEY
      apiUrl: https://api.dify.ai
```

Replace `YOUR_DIFY_API_KEY` with the API key of your Dify assistant. You can find the API key in your Dify account for the specific assistant you want to test.

Additionally, you can define multiple Dify assistants by adding more provider configurations with different URLs and API keys. You can modify the `id` field to include a name of your Dify assistant, this helps to identify the assistant in the report.

```yaml
providers:
  - id: webhook:http://localhost:3000/dify-assistant-1
    config:
      ...

  - id: webhook:http://localhost:3000/dify-assistant-2
    config:
      apiKey: ANOTHER_DIFY_API_KEY
      apiUrl: https://api.dify.ai
```

Replace `ANOTHER_DIFY_API_KEY` with the API key of the second Dify assistant.

By defining multiple Dify assistants, you can compare results and evaluate their performance side by side.

### Changing the User for Dify Calls 🔄

In the Dify provider configuration, you can change the user for Dify calls by updating the `user` field in the `config` object. The `user` field specifies the user context for the Dify assistant. You will see requests from promptfoo with this user in the Dify Logs.

Here's an example of how to change the user for a Dify assistant:

```yaml
providers:
  - id: webhook:http://localhost:3000/dify-assistant-1
    config:
      apiKey: YOUR_DIFY_API_KEY
      apiUrl: https://api.dify.ai
      user: new_user
```

Replace `new_user` with the desired user context for the Dify assistant.

### Defining Inputs for Dify Assistants 📄

In the Dify provider configuration, you can define inputs, which are passed to the Dify assistant during a call.

Here's an example of how to define inputs for a Dify assistant:

```yaml
providers:
  - id: webhook:http://localhost:3000/dify-assistant-1
    config:
      apiKey: YOUR_DIFY_API_KEY
      apiUrl: https://api.dify.ai
      user: eval
      inputs:
        instruction: "You are a helpful assistant." # you can actually write instructions in this promptfoo yaml if you place only this variable in the Dify assistants instruction.
        another_variable: ""
```

**Note**: You can add as much variables as you want, you can leave them blank but make sure you define them as optional in Dify, otherwise test execution will fail.

## Acknowledgments 🙌

This project would not be possible without the contributions of the following projects:

- [PromptFoo](https://github.com/typpo/promptfoo) - For providing an excellent evaluation tool that allows us to test and compare language models.
- [Dify](https://github.com/langgenius/dify) - For building a powerful platform that enables users to create and manage custom AI assistants.

_Give them a star if you find their projects helpful!_ 🌟

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to reach out if you have any questions or need assistance! 💬