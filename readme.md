# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 04 Apr 2024 01:53:53 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1242-42 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `121`ns (109%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (280%)        | `361`ns (325%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `532`ns (479%)        | `601`ns (541%)                 | `1,879,699`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (514%)        | `661`ns (595%)                 | `1,751,313`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,122`ns (1,011%)    | `1,222`ns (1,101%)             | `891,266`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,322`ns (1,191%)    | `1,533`ns (1,381%)             | `756,430`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (1,255%)    | `1,553`ns (1,399%)             | `717,875`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,725`ns (2,455%)    | `2,945`ns (2,653%)             | `366,972`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (4,118%)    | `5,011`ns (4,514%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,191`ns (65,037%)  | `72,959`ns (65,729%)           | `13,852`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,122`ns (135%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,383`ns (4,373%)   | `52,191`ns (6,273%)            | `27,485`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,967`ns (10,092%)  | `155,519`ns (18,692%)          | `11,909`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (222%)        | `371`ns (265%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (372%)        | `631`ns (451%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (408%)        | `691`ns (494%)                 | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (938%)      | `1,632`ns (1,166%)             | `761,615`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,559`ns (3,256%)    | `5,291`ns (3,779%)             | `219,346`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,607`ns (26,148%)  | `37,631`ns (26,879%)           | `27,317`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `130`ns (118%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (310%)        | `381`ns (346%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `390`ns (355%)        | `461`ns (419%)                 | `2,564,103`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,312`ns (1,193%)    | `1,413`ns (1,285%)             | `762,195`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,703`ns (1,548%)    | `1,873`ns (1,703%)             | `587,199`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,423`ns (5,839%)    | `6,775`ns (6,159%)             | `155,690`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,487`ns (72,261%)  | `80,383`ns (73,075%)           | `12,581`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `572`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `681`ns (142%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `241`ns (110%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (246%)        | `601`ns (273%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
