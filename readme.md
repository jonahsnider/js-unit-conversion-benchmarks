# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 13 Nov 2026 01:15:21 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmccnms (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (227%)        | `120`ns (245%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (245%)        | `121`ns (247%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (410%)        | `210`ns (429%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `350`ns (714%)        | `351`ns (716%)                 | `2,857,143`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `470`ns (959%)        | `471`ns (961%)                 | `2,127,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,063%)      | `531`ns (1,084%)               | `1,919,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,012`ns (2,065%)    | `1,022`ns (2,086%)             | `988,142`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,844`ns (3,763%)    | `1,873`ns (3,822%)             | `542,299`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `621`ns (100%)        | `691`ns (111%)                 | `1,610,306`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,723`ns (277%)      | `1,873`ns (302%)               | `580,383`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,143`ns (3,888%)   | `25,439`ns (4,096%)            | `41,420`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (186%)        | `140`ns (200%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (214%)        | `150`ns (214%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (301%)        | `221`ns (316%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (701%)        | `501`ns (716%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,964`ns (2,806%)    | `1,984`ns (2,834%)             | `509,165`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (245%)        | `120`ns (245%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (267%)        | `141`ns (288%)                 | `7,633,588`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (286%)        | `141`ns (288%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,002%)      | `501`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,351%)    | `1,162`ns (2,371%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,735`ns (5,582%)    | `2,777`ns (5,667%)             | `365,631`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `230`ns (104%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (113%)        | `251`ns (114%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (132%)        | `311`ns (141%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
