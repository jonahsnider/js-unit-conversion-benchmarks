# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 06 May 2024 17:12:02 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az775-257 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (284%)        | `400`ns (333%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (434%)        | `581`ns (484%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (484%)        | `661`ns (551%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,263`ns (1,053%)             | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,362`ns (1,135%)    | `1,592`ns (1,327%)             | `734,214`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,412`ns (1,177%)    | `1,563`ns (1,303%)             | `708,215`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,645`ns (2,204%)    | `2,915`ns (2,429%)             | `378,072`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,599`ns (3,833%)    | `5,091`ns (4,243%)             | `217,439`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,959`ns (60,799%)  | `73,599`ns (61,333%)           | `13,706`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `882`ns (100%)        | `1,182`ns (134%)               | `1,133,787`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,255`ns (4,111%)   | `52,895`ns (5,997%)            | `27,582`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,479`ns (9,578%)   | `159,231`ns (18,053%)          | `11,837`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `161`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (227%)        | `401`ns (267%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (321%)        | `581`ns (387%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (381%)        | `701`ns (467%)                 | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,373`ns (915%)      | `1,784`ns (1,189%)             | `728,332`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (3,047%)    | `5,631`ns (3,754%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,863`ns (24,575%)  | `38,687`ns (25,791%)           | `27,127`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `100`ns (100%)        | `140`ns (140%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (310%)        | `371`ns (371%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `390`ns (390%)        | `511`ns (511%)                 | `2,564,103`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,152`ns (1,152%)    | `1,313`ns (1,313%)             | `868,056`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,623`ns (1,623%)    | `1,854`ns (1,854%)             | `616,143`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,035`ns (6,035%)    | `6,643`ns (6,643%)             | `165,700`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,303`ns (74,303%)  | `81,023`ns (81,023%)           | `13,458`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `591`ns (123%)        | `661`ns (137%)                 | `1,692,047`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (252%)        | `591`ns (280%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
