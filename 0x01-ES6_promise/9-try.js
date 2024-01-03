export default function guardrail(mathfunction) {
  const queue = ['Guardrail was processed'];
  try {
    queue.unshift(mathfunction());
  } catch (err) {
    queue.unshift(`Error: ${err.message}`);
  }
  return queue;
}
