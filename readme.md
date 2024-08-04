# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 04 Aug 2024 02:13:40 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az695-121 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (500%)        | `381`ns (635%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `331`ns (552%)        | `410`ns (683%)                 | `3,021,148`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (868%)        | `651`ns (1,085%)               | `1,919,386`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `982`ns (1,637%)      | `1,092`ns (1,820%)             | `1,018,330`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (2,053%)    | `1,393`ns (2,322%)             | `811,688`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,273`ns (2,122%)    | `1,442`ns (2,403%)             | `785,546`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,405`ns (4,008%)    | `2,645`ns (4,408%)             | `415,800`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,279`ns (7,132%)    | `4,591`ns (7,652%)             | `233,699`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `61,567`ns (102,612%) | `64,799`ns (107,998%)          | `16,242`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `831`ns (100%)        | `1,373`ns (165%)               | `1,203,369`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,487`ns (3,548%)   | `51,967`ns (6,254%)            | `33,913`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,415`ns (9,196%)   | `139,007`ns (16,728%)          | `13,086`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (459%)        | `371`ns (530%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `350`ns (500%)        | `401`ns (573%)                 | `2,857,143`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (716%)        | `581`ns (830%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,323`ns (1,890%)    | `1,503`ns (2,147%)             | `755,858`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,751`ns (6,787%)    | `5,091`ns (7,273%)             | `210,482`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,895`ns (46,993%)  | `33,567`ns (47,953%)           | `30,400`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (429%)        | `361`ns (516%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (500%)        | `460`ns (657%)                 | `2,857,143`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,242`ns (1,774%)    | `1,513`ns (2,161%)             | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,703`ns (2,433%)    | `2,355`ns (3,364%)             | `587,199`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,343`ns (9,061%)    | `7,855`ns (11,221%)            | `157,654`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,783`ns (101,119%) | `72,447`ns (103,496%)          | `14,128`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `361`ns (100%)        | `410`ns (114%)                 | `2,770,083`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `421`ns (117%)        | `471`ns (130%)                 | `2,375,297`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `511`ns (142%)        | `581`ns (161%)                 | `1,956,947`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `190`ns (271%)        | `201`ns (287%)                 | `5,263,158`/sec       |

<!-- endblock(results) -->
