# Docker Greeting Action

This local Docker action receives a message input, prints it in the container logs, and exposes it as the `output-message` output for later steps in the workflow.

## Inputs

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `message` | No | `Hello from Docker action` | Message to display and forward |

## Outputs

| Name | Description |
| --- | --- |
| `output-message` | The message propagated to downstream workflow steps |

## Example

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v4

  - name: Run Docker greeting action
    id: docker_greeting
    uses: ./actions/docker-greeting
    with:
      message: Hello from Docker action

  - name: Show output
    run: echo "Docker output: ${{ steps.docker_greeting.outputs.output-message }}"
```

## Behavior

The script prints the received message in the logs and writes it to `$GITHUB_OUTPUT` so it can be reused in the same workflow.
