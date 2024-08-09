# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Aug 2024 21:10:53 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1200-555 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (400%)        | `310`ns (517%)                 | `4,166,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `290`ns (483%)        | `351`ns (585%)                 | `3,448,276`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `451`ns (752%)        | `531`ns (885%)                 | `2,217,295`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `922`ns (1,537%)      | `1,022`ns (1,703%)             | `1,084,599`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,012`ns (1,687%)    | `1,102`ns (1,837%)             | `988,142`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,152`ns (1,920%)    | `1,292`ns (2,153%)             | `868,056`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,235`ns (3,725%)    | `2,435`ns (4,058%)             | `447,427`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,099`ns (6,832%)    | `4,379`ns (7,298%)             | `243,962`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `62,687`ns (104,478%) | `64,671`ns (107,785%)          | `15,952`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `1,172`ns (154%)               | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,119`ns (3,821%)   | `51,263`ns (6,727%)            | `34,342`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,055`ns (10,112%)  | `138,879`ns (18,226%)          | `12,978`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `90`ns (100%)         | `100`ns (111%)                 | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (267%)        | `270`ns (300%)                 | `4,166,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `331`ns (368%)        | `370`ns (411%)                 | `3,021,148`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (546%)        | `541`ns (601%)                 | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `992`ns (1,102%)      | `1,042`ns (1,158%)             | `1,008,065`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,311`ns (4,790%)    | `4,519`ns (5,021%)             | `231,965`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,495`ns (36,106%)  | `32,991`ns (36,657%)           | `30,774`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `80`ns (100%)         | `90`ns (113%)                  | `12,500,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (400%)        | `401`ns (501%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `341`ns (426%)        | `411`ns (514%)                 | `2,932,551`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,233`ns (1,541%)    | `1,383`ns (1,729%)             | `811,030`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,635`ns (3,294%)    | `2,865`ns (3,581%)             | `379,507`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,035`ns (7,544%)    | `7,507`ns (9,384%)             | `165,700`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,847`ns (88,559%)  | `72,575`ns (90,719%)           | `14,115`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `361`ns (100%)        | `401`ns (111%)                 | `2,770,083`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `421`ns (117%)        | `480`ns (133%)                 | `2,375,297`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `511`ns (142%)        | `581`ns (161%)                 | `1,956,947`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `180`ns (257%)        | `191`ns (273%)                 | `5,555,556`/sec       |

<!-- endblock(results) -->
