const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 4, 4]
});
data = [
    {
        input: [0, 0],
        output: [0]
    },
    {
        input: [1, 0],
        output: [1]
    },
    {
        input: [0, 1],
        output: [1]
    },
    {
        input: [1, 1],
        output: [0]
    },
];
net.train(data);

const diagram = document.getElementById('diagram');
diagram.innerHTML = brain.utilities.toSVG(net);