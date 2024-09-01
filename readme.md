# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 01 Sep 2024 19:44:14 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az1759-78 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `151`ns (302%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `260`ns (520%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (902%)        | `461`ns (922%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `512`ns (1,024%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `591`ns (1,182%)      | `611`ns (1,222%)               | `1,692,047`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,082`ns (2,164%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (4,310%)    | `2,175`ns (4,350%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,631`ns (83,262%)  | `41,919`ns (83,838%)           | `24,021`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `681`ns (100%)        | `732`ns (107%)                 | `1,468,429`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,367`ns (4,165%)   | `29,295`ns (4,302%)            | `35,252`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,303`ns (13,260%)  | `90,687`ns (13,317%)           | `11,074`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (173%)        | `140`ns (200%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (187%)        | `140`ns (200%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (330%)        | `241`ns (344%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (730%)        | `521`ns (744%)                 | `1,956,947`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,225`ns (3,179%)    | `2,245`ns (3,207%)             | `449,438`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,615`ns (30,879%)  | `21,695`ns (30,993%)           | `46,264`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (2,444%)    | `1,233`ns (2,466%)             | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,117`ns (6,234%)    | `3,147`ns (6,294%)             | `320,821`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,599`ns (91,198%)  | `45,887`ns (91,774%)           | `21,930`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (126%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (142%)        | `281`ns (147%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
