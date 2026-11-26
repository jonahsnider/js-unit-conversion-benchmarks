# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Nov 2026 09:22:07 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `221`ns (442%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (722%)        | `371`ns (742%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,062%)      | `551`ns (1,102%)               | `1,883,239`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,032`ns (2,064%)    | `1,062`ns (2,124%)             | `968,992`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,893`ns (3,786%)    | `1,924`ns (3,848%)             | `528,262`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `651`ns (100%)        | `731`ns (112%)                 | `1,536,098`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,533`ns (235%)      | `1,703`ns (262%)               | `652,316`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,647`ns (3,632%)   | `24,831`ns (3,814%)            | `42,289`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (265%)        | `131`ns (267%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (265%)        | `131`ns (267%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (388%)        | `191`ns (390%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (941%)        | `491`ns (1,002%)               | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,024`ns (4,131%)    | `2,055`ns (4,194%)             | `494,071`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (247%)        | `130`ns (265%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `160`ns (327%)                 | `6,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `490`ns (1,000%)      | `510`ns (1,041%)               | `2,040,816`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,162`ns (2,371%)    | `1,172`ns (2,392%)             | `860,585`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,795`ns (5,704%)    | `2,837`ns (5,790%)             | `357,782`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `231`ns (100%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `251`ns (109%)        | `260`ns (113%)                 | `3,984,064`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `330`ns (143%)        | `341`ns (148%)                 | `3,030,303`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `120`ns (240%)        | `210`ns (420%)                 | `8,333,333`/sec       |

<!-- endblock(results) -->
