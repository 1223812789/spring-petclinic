# Custom Greeting Action

This local GitHub Action creates a greeting message from a `username` and an optional `greeting`, logs it, and exposes it through the `message` output.

## Inputs

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `username` | Yes | - | The name to be greeted |
| `greeting` | No | `Hello` | The greeting prefix |

## Outputs

| Name | Description |
| --- | --- |
| `message` | The final greeting sentence |

## Example

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v4

  - name: Run greeting action
    id: greet
    uses: ./actions/greeting
    with:
      username: Alice
      greeting: Bonjour

  - name: Display greeting output
    run: echo "Greeting: ${{ steps.greet.outputs.message }}"
```

## Behavior

The action prints a message in the logs and sets the `message` output so it can be reused by later steps in the same workflow.
