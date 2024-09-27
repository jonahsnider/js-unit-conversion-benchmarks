# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Sep 2024 19:19:10 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az1146-598 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `161`ns (322%)        | `171`ns (342%)                 | `6,211,180`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (502%)        | `270`ns (540%)                 | `3,984,064`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `461`ns (922%)        | `481`ns (962%)                 | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `651`ns (1,302%)      | `681`ns (1,362%)               | `1,536,098`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,163`ns (2,326%)    | `1,203`ns (2,406%)             | `859,845`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,225`ns (4,450%)    | `2,265`ns (4,530%)             | `449,438`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,983`ns (83,966%)  | `42,271`ns (84,542%)           | `23,819`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `872`ns (113%)                 | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,727`ns (3,856%)   | `32,367`ns (4,198%)            | `33,639`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,071`ns (11,812%)  | `91,711`ns (11,895%)           | `10,980`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (180%)        | `111`ns (182%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (197%)        | `131`ns (215%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (344%)        | `230`ns (377%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (772%)        | `480`ns (787%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,185`ns (3,582%)    | `2,205`ns (3,615%)             | `457,666`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,295`ns (34,910%)  | `21,359`ns (35,015%)           | `46,959`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (1,162%)      | `611`ns (1,222%)               | `1,721,170`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,262`ns (2,524%)    | `1,282`ns (2,564%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,187`ns (6,374%)    | `3,227`ns (6,454%)             | `313,775`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,695`ns (91,390%)  | `45,951`ns (91,902%)           | `21,884`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (120%)        | `241`ns (121%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (136%)        | `281`ns (141%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
