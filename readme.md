# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 16 Aug 2024 22:41:38 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1148-139 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `181`ns (362%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `250`ns (500%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `492`ns (984%)        | `511`ns (1,022%)               | `2,032,520`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `500`ns (1,000%)      | `501`ns (1,002%)               | `2,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `581`ns (1,162%)      | `601`ns (1,202%)               | `1,721,170`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,122`ns (2,244%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (4,290%)    | `2,175`ns (4,350%)             | `466,200`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,911`ns (69,822%)  | `35,007`ns (70,014%)           | `28,644`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `761`ns (100%)        | `821`ns (108%)                 | `1,314,060`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,975`ns (3,807%)   | `29,887`ns (3,927%)            | `34,513`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,159`ns (10,008%)  | `76,607`ns (10,067%)           | `13,130`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (198%)        | `130`ns (213%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (230%)        | `141`ns (231%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (346%)        | `231`ns (379%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (789%)        | `491`ns (805%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (3,598%)    | `2,215`ns (3,631%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,695`ns (29,008%)  | `17,743`ns (29,087%)           | `56,513`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `151`ns (302%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (2,444%)    | `1,232`ns (2,464%)             | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,035`ns (6,070%)    | `3,057`ns (6,114%)             | `329,489`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,047`ns (76,094%)  | `38,175`ns (76,350%)           | `26,283`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `190`ns (100%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (122%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (137%)        | `271`ns (143%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
