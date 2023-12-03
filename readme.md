# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 03 Dec 2023 23:29:39 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az975-565 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (199%)        | `422`ns (221%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (236%)        | `522`ns (273%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `642`ns (336%)        | `703`ns (368%)                 | `1,557,632`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,083`ns (567%)      | `1,192`ns (624%)               | `923,361`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,324`ns (693%)      | `1,484`ns (777%)               | `755,287`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (729%)      | `1,534`ns (803%)               | `717,875`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,685`ns (1,406%)    | `2,877`ns (1,506%)             | `372,439`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,783`ns (2,504%)    | `5,151`ns (2,697%)             | `209,074`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,455`ns (4,950%)    | `9,735`ns (5,097%)             | `105,764`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `842`ns (109%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,071`ns (4,025%)   | `37,855`ns (4,903%)            | `32,184`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,519`ns (5,119%)   | `40,127`ns (5,198%)            | `25,304`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (185%)        | `412`ns (205%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (224%)        | `502`ns (250%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (294%)        | `652`ns (324%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,284`ns (639%)      | `1,393`ns (693%)               | `778,816`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (668%)      | `1,473`ns (733%)               | `744,602`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,739`ns (2,358%)    | `5,079`ns (2,527%)             | `211,015`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `212`ns (100%)        | `240`ns (113%)                 | `4,716,981`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (180%)        | `422`ns (199%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (223%)        | `522`ns (246%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,372`ns (647%)      | `1,464`ns (691%)               | `728,863`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,834`ns (865%)      | `2,035`ns (960%)               | `545,256`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,955`ns (2,809%)    | `6,135`ns (2,894%)             | `167,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,907`ns (3,258%)    | `7,255`ns (3,422%)             | `144,781`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `602`ns (100%)        | `672`ns (112%)                 | `1,661,130`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `622`ns (103%)        | `683`ns (113%)                 | `1,607,717`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `702`ns (117%)        | `782`ns (130%)                 | `1,424,501`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `302`ns (100%)        | `331`ns (110%)                 | `3,311,258`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (170%)        | `571`ns (189%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
