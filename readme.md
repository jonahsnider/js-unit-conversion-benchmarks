# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 14 Nov 2025 04:08:53 GMT with Node.js v24.11.0 (V8 v13.6.233.10-node.28) on runnervmw9dnm (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (245%)        | `120`ns (245%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (265%)        | `140`ns (286%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (267%)        | `140`ns (286%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (410%)        | `210`ns (429%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (757%)        | `381`ns (778%)                 | `2,695,418`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,022%)      | `521`ns (1,063%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,308%)      | `651`ns (1,329%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,167%)    | `1,112`ns (2,269%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,743`ns (3,557%)    | `1,773`ns (3,618%)             | `573,723`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `611`ns (100%)        | `682`ns (112%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,834`ns (300%)      | `2,014`ns (330%)               | `545,256`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,879`ns (4,399%)   | `28,719`ns (4,700%)            | `37,204`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (167%)        | `100`ns (167%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `181`ns (302%)        | `191`ns (318%)                 | `5,524,862`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `601`ns (1,002%)      | `611`ns (1,018%)               | `1,663,894`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,884`ns (3,140%)    | `1,923`ns (3,205%)             | `530,786`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `49`ns (123%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (328%)        | `140`ns (350%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (353%)        | `150`ns (375%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,303%)      | `552`ns (1,380%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,914`ns (4,785%)    | `1,934`ns (4,835%)             | `522,466`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,665`ns (6,663%)    | `2,745`ns (6,863%)             | `375,235`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `230`ns (104%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (109%)        | `241`ns (109%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (136%)        | `301`ns (136%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (220%)         | `91`ns (222%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
